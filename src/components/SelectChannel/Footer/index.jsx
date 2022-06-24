import React from 'react';
import ContentList from './content'
import { FooterWrapper, TabWrapper } from './style'

export default function Footer(props) {

    const { data, changed, FalseCheck } = props

    return (
        <FooterWrapper>
            {
            FalseCheck.length > 0 &&
            <TabWrapper>
                <header>
                    <div className='left'>
                        <p>推荐频道</p>
                    </div>
                </header>
            </TabWrapper>
            }
            <ContentList data={data} changed={changed} />
        </FooterWrapper>
    );
}
