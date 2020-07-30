import ActionHandler from './ActionHandler'
import ImageSearchWorker from '../Workers/ImageSearchWorker'

class PicTagActionHandler extends ActionHandler {
  public handle (channelId: string) {
    const imageSearchWorker = new ImageSearchWorker(channelId)
    imageSearchWorker.searchImg(this.client, '', true)
  }

  public isRecallable () {
    return true
  }
}

export default PicTagActionHandler