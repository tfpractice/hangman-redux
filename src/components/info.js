import React from 'react';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { List, ListItem, } from 'material-ui/List';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Info = ({ examples, definitions, }) => (
  <Tabs>
    <Tab label="Definitions" >
      <List>
        {definitions.map((d, i) => <ListItem key={i} primaryText={<h5>{d}</h5>}/>)}
      </List>
    </Tab>
    <Tab label="Example Usage" >
      <List>
        {examples.map((d, i) => <ListItem key={i} primaryText={<h5>{d}</h5>}/>)}
      </List>
    </Tab>
  </Tabs>
);

export default Info;
