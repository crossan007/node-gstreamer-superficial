export * from './build/Release/gstreamer-superficial.node'

/**
 * Joins an array of pipeline children together using the
 * '!' separator.
 *
 * @param arr
 * @returns
 */
export const pipelineFromArray = (arr) => {
  return arr.join(" ! ");
};
