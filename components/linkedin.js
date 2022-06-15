import { Box, Center } from "@chakra-ui/react"

const LinkedIn =()=> {
    return(
        <Center 
            align="center"
            position="absolute"
            top="md"
            class="badge-base LI-profile-badge"
            data-locale="es_ES"
            data-size="medium"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="alejandro-zuluaga-baron-342612217"
            data-version="v1">

            <Box 
                align="center"
                class="badge-base__link LI-simple-link"
                href="https://co.linkedin.com/in/alejandro-zuluaga-baron-342612217?trk=profile-badge">
            </Box>
        </Center>
    )
    
}

export default LinkedIn


//<div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="alejandro-zuluaga-baron-342612217" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://co.linkedin.com/in/alejandro-zuluaga-baron-342612217?trk=profile-badge">Alejandro Zuluaga Barón</a></div>
              