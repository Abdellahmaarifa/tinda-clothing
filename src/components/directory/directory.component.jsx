import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from './directory.selectors';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component'; 
import { DirectoryMenuContainer,DirectoryHeading } from './directory.styles';
const Directory = ({sections}) =>(
  <DirectoryMenuContainer>
    <DirectoryHeading>Explore popular categories</DirectoryHeading>
      {
          sections.map(({id, ...otherSectionProps}) => (
              <MenuItem 
                  id = {id} 
                  {...otherSectionProps}
              />))
      }
  </DirectoryMenuContainer>);
  const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  })


export default connect(mapStateToProps)(Directory);