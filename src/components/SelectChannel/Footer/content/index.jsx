import React from 'react'
import { 
    Tab,
    TabItem
} from './style'

export default function ContentList(props) {

    const { data , changed } = props

    return (
        <Tab>
            {
                data.map((item) => 
                    item.checked == false &&
                    <TabItem key={item.id}>
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                        <i className="iconfont icon-tianjia" onClick={() => changed(item)}></i>
                    </TabItem>
                )
            }
        </Tab>
    )
}