import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/*2. Here, we get notified and set the selected genre, 
          this causes the app component to rerender*/}
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>

        {/*3. The next render will pass the selected genre 
        to the gameGrid *go to gameGrid.tsx for next explaination*/}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
