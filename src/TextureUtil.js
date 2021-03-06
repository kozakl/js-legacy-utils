class TextureUtil
{
    static copyFrames(frames, n, path)
    {
        frames = frames || [];
        for (let i = 1; i <= n; ++i)
            frames[frames.length] = PIXI.Texture.fromFrame(path + '/frame' + i + '.png');
        
        return frames;
    }
    
    static copyFramesWithStart(frames, start, end, path)
    {
        frames = frames || [];
        for (let i = start || 1; i <= end; ++i)
            frames[frames.length] = PIXI.Texture.fromFrame(path + '/frame' + i + '.png');
        
        return frames;
    }
    
    static rename(path, name)
    {
        PIXI.Texture.addTextureToCache(
            PIXI.Texture.removeTextureFromCache(path), name);
    }
    
    static fromFrame(frameId)
    {
        const texture = PIXI.utils.TextureCache[frameId + '.png'] ||
                        PIXI.utils.TextureCache[frameId + '.jpg'];
        if (!texture)
            throw new Error(`The frameId "${frameId}" does not exist in the texture cache`);
        return texture;
    }
}
