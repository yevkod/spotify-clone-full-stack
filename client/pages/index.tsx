import React from 'react';
import MainLayout from "../layouts/MainLayout";
import logo from '../assets/logo.png';

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className="center">
                    <h1>Welcome</h1>
                    <h3>Here you can find tracks</h3>
                </div>
            </MainLayout>
            <div style={{width: "450px", height: "150px"}}>
                <img style={{width: "450px", height: "150px", margin: "0 0 0 450px"}} src={logo.src} />
            </div>

            <style jsx>
                {`
                  .center {
                    margin: 150px 0 0 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                `}
            </style>
        </>
    );
};

export default Index;

