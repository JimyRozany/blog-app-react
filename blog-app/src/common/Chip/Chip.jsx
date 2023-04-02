import Styles from './Chip.module.css';

const Chip = ({lable}) => {
  return (
    <p className={Styles.chip}>
      {lable}
    </p>
  )
}

export default Chip
