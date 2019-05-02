import React from 'react'

class Tab extends Component {
  onClick = () => {
    const {id, onClick} = this.props
    onClick(id)
  }

  render(){
    const {onClick, activeTab, id} = this.props

    let className = "tab-list"

    if(activeTab === id){
      className += 'tab-active'
    }

    return (
      <div className={className} onClick={onClick} id={id} />
    )
  }
}

export default Tab