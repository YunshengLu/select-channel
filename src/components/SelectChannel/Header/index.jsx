import React from 'react';
import { Tab } from './style';

export default function Header(props) {
    return (
        <Tab>
            <div className="left">
                <a href="#">
                    <i className="iconfont icon-fanhui"></i>
                </a>
            </div>
            <div className="content">首页频道选择</div>
            <div className="right">
                <a href="#">
                    确定
                </a>
            </div>
        </Tab>
    );
}
