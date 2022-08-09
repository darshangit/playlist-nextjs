import NextImage from "next/image";
import NextLink from "next/link";

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favourites",
  },
];

const getMenus = (menu) => (
  <LinkBox>
    <NextLink href={menu.route} passHref>
      <LinkOverlay>
        <ListIcon as={menu.icon} color="white" marginRight="20px" />
        {menu.name}
      </LinkOverlay>
    </NextLink>
  </LinkBox>
);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" width={60} height={120} />
        </Box>
        <Box>
          <Box marginBottom="20px">
            <List spacing={2}>
              {navMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  {getMenus(menu)}
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider color="grey.700" />
          <Box marginTop="20px">
            <List spacing={2}>
              {musicMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  {getMenus(menu)}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
