import Styles from './EmptyList.module.css'
import emptyImg from '../../images/empty.gif'

const EmptyList = () => {
  return (
    <div className={Styles.emptyList_wrap}>
      <img src={emptyImg} alt="empty" />
    </div>
  )
}

export default EmptyList
