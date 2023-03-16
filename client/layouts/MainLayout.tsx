import React, {ReactNode} from 'react';
import {Container} from "@mui/system";
import {Navbar} from "../components/Navbar";
import Player from "../components/Player";

interface ContainerProps {
    children?: ReactNode;
}


const MainLayout: React.FC<ContainerProps> =
    ({
         children,
     }) => {
        return (
            <>
                <Navbar/>
                <Container style={{margin: '90px 0'}}>
                    {children}
                </Container>
                <Player/>
            </>
        );
    };

export default MainLayout;
