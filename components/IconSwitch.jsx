function IconSwitch (props) {
  const iconsIs = (icon) => {
    if(!icon) {
      return 'view_list';
    } else {
      return 'view_module'
    }
  }
  return (
    <button className="btn">
      <span className="material-icons md-36" onClick={props.onSwitch}>{iconsIs(props.icon)}</span>
    </button>
  )
}
export default IconSwitch;