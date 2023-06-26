import { Box } from "@chakra-ui/react";
import Image from 'next/image'


const Homepagehero = () => {
    return (
        <Box>hi

            <Image
                src="/haier-aa-home-refrigeration-2400.png"
                width={2400}
                height={1200}
                alt="Hero image"
            />

        </Box>

    );
};

export default Homepagehero;