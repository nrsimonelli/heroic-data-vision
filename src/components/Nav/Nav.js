import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

const Nav = () => {
  return (
    <div className='nav-root'>
      <div className='container'>
        <div className='title'>Power Stats</div>
        <div className='sub-container'>
          <div>
            <a href='https://github.com/nrsimonelli/heroic-data-vision'>
              <GithubOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
