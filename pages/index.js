import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import Script from 'next/script'
import LinkedIn from '../components/linkedin'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi to everyone who sees this webpage, my name is Alejandro a software developer based in Colombia! Join me in my way to become a fullstack developer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alejandro Zuluaga
          </Heading>
          <List>
          <ListItem>Mechanical engineer</ListItem>
          <ListItem>Developer</ListItem>
          </List>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="alpinewhite.500"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/alejandro.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Profile
        </Heading>
        <Paragraph>
        Mechanical engineer and self-taught developer, who is really passionated about technology, automation and problem resolution. Currently I'm aiming to become a full-stack developer to embrace any challenge for processes improvement. Personally an absolute motorsport fan and car enthusiast. 
        </Paragraph>
        {/* <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="red">
              My portfolio
            </Button>
          </NextLink>
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Bogotá, Colombia.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Initialized my mechanical engineering carreer at Fundación Universidad de América
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Leaded the IT area in my mom's e-commerce startup, starting with the automation of little task with python, RPA, and Visual Basic.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked with small and medium size business designing and customizing Shopify themes.
        </BioSection>
        <BioSection>
          <BioYear>Now</BioYear>
          Currently awaiting my mechanical engineering bachelor degree ceremony and learning front-end and back-end to become a fullstack developer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interest
        </Heading>
        <List>
          <ListItem>Motorsports</ListItem>
          <ListItem>Music</ListItem>
          <ListItem>Front-end</ListItem>
          <ListItem>Back-end</ListItem>
          <ListItem>Machine learning</ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/zuluagab99" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoGithub />}
              >
                zuluagab99
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/zuluagab99" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoTwitter />}
              >
                zuluagab99
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/_azuluagab" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoInstagram />}
              >
                _azuluagab
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>

      <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect with me
          </Heading>
        <LinkedIn>
        </LinkedIn>
      </Section>
      <Script 
        src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" strategy='lazyOnload'>
      </Script>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
