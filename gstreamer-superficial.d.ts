declare module "gstreamer-superficial" {
  /**
   * Joins an array of pipeline children together using the
   * '!' separator.
   *
   * @param arr
   * @returns
   */
  export const pipelineFromArray = (arr: string[]) => string;

  declare type AppSink  = {
    pull(callback: (buffer: any, caps: any)=>void );

  }
  declare type AppSrc = {

  }

  declare type BussPollMessage = {
    type: string,
    [key: string]: any
  }

  declare class Pipeline {
    /**
     * Creates a new GStreamer pipeline using the launch string provided
     * 
     * @param launch The gstreamer launch pipeline text
     * 
     * 
     * @example 
     * const pipeline = new gstreamer.Pipeline(
     *  PipelineFromArray([
     *   "videotestsrc pattern=ball",
     *   "video/x-raw,width=320,height=240,framerate=100/1",
     *   "theoraenc",
     *   "oggmux",
     *   "appsink max-buffers=1 name=sink"
     * ])
     * );

     * 
     */
    constructor(launch: string);
   
    /**
     * sets the pipeline state to `GST_STATE_PLAYING`
     */
    play(): void;
    /**
     * 
     */
    stop(): void;
    /**
     * 
     */
    sendEOS(): void;
    /**
     * 
     */
    pause(): void;

    /**
     * 
     * @param time_nanoseconds 
     * @param flags TODO: Map this to a type
     */
    seek(time_nanoseconds: number, flags: any)

    /**
     * 
     */
    queryPosition(): number
    /**
     * 
     */
    queryDuration(): number

    forceKeyUnit(sink: GObject, count:number)

    findChild(nodeName: string): GObject | AppSink | AppSrc

    setPad(element: GObject, attribute: string, padName: string)

    getPad(element: GObject, padName: string);

    pollBus(callback: (message: BussPollMessage)=>void)

  }
}
