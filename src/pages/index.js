import React from 'react';
import Layout from '../components/layout';
import useIndex from '../hooks/useIndex';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image'; 
import heroCSS from '../css/hero.module.css';
import Find from '../components/find';
import ListedProperties from '../components/listedProperties';


const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const index = useIndex();

    const { name, content, image } = index[0];

    return ( 
        <Layout>
            <ImageBackground
                tag="section"
                fluid={image.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagebg}>
                    <h1 className={heroCSS.title}>Sale of exclusive houses and apartments</h1>
                </div>
            </ImageBackground>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{name}</h1>
                    <p
                        css={css`
                            text-align: justify;
                        `}
                    >{content}</p>
                </div>
            </main>

            <Find />

            <ListedProperties />

        </Layout>
     );
}
 
export default Index;