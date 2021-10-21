import React from 'react'

const TabItem = ({ tabData, handleActiveTab, activeTab }) => {
	return (
		<li
			className={`nav-item col-4 `}
			onClick={() => {
				handleActiveTab(tabData.id)
			}}>
			<div
				className={`nav-link ${activeTab === tabData.id ? 'active show' : ''}`}>
				<i className={`${tabData.iconClass} d-none d-md-block`}></i>
				<h4>{tabData.tabTitle}</h4>
			</div>
		</li>
	)
}
export default TabItem
