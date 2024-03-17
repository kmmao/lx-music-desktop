import { setMeta } from '@common/utils/musicMeta'
import { mergeLyrics } from './lrcTool'

export const writeMeta = (filePath: string, meta: Omit<LX.Music.MusicFileMeta, 'lyrics'>, lyricData: { lrc: string, tlrc: string | null, rlrc: string | null }) => {
  setMeta(filePath, { ...meta, lyrics: mergeLyrics(lyricData.lrc, lyricData.tlrc, lyricData.rlrc) || null })
}

export { saveLrc } from './utils'
