import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Image from 'next/image'


const Homepagehero = () => {
    return (
        <Box  >

            <Image
                src="/haier-aa-home-refrigeration-2400.png"
                width={2400}
                height={1200}
                alt="Hero image"


            />
            <Box sx={{
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
              }}>
                <Flex flexDirection={"column"} color = '#FFF'fontSize= '14px'fontFamily= 'Arial' lineHeight= '25px'>
                    <Box>SMART HOME COMFORT</Box>
                    <Spacer />
                    <Box>Home heating and cooling that is efficient,
                        climate friendly and connected.</Box>
                    <Spacer />
                    <Button colorScheme="blue" variant='outline' bg = 'white'>Get a quote</Button>
                    
                </Flex>
            </Box>
        </Box>

    );
};

export default Homepagehero;