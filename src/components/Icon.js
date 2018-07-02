import React from "react";
import styled from "styled-components";

import IconJavascript from 'react-devicon/javascript/plain';
import IconTypescript from 'react-devicon/typescript/plain';
import IconIonic from 'react-devicon/ionic/original';
import IconAngularjs from 'react-devicon/angularjs/original';
import IconMeteor from 'react-devicon/meteor/original';
import IconMongodb from 'react-devicon/mongodb/original';
import IconRuby from 'react-devicon/ruby/plain';
import IconRails from 'react-devicon/rails/plain';
import IconReact from 'react-devicon/react/original';
import IconBootstrap from 'react-devicon/bootstrap/plain';
import IconHtml5 from 'react-devicon/html5/plain';
import IconCss3 from 'react-devicon/css3/plain';
import IconHeroku from 'react-devicon/heroku/plain';
import IconMysql from 'react-devicon/mysql/plain';
import IconPython from 'react-devicon/python/original';

const IconWrapper = styled.span`
  & svg {
    width: ${props => props.size};
    height: ${props => props.size};
    stroke: ${props => props.color};
  }
`;

const icons = {
  paper_plane: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>,
  file: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>,
  up_arrow: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/>
            </svg>,
  github: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <path d="M2,4a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"/>
            </svg>,
  javascript: <IconJavascript width={100} height={100} />,
  typescript: <IconTypescript />,
  react: <IconReact  width={100} height={100}/>,
  ionic: <IconIonic />,
  angular: <IconAngularjs />,
  meteor: <IconMeteor />,
  mongodb: <IconMeteor />,
  ruby: <IconRuby />,
  rails: <IconRails />,
  bootstrap: <IconBootstrap />,
  html5: <IconHtml5 />,
  css3: <IconCss3 />,
  heroku: <IconHeroku />,
  mysql: <IconMysql />,
  python: <IconPython />,
}

const Icon = (props) => (
  <IconWrapper size={props.size} color={props.color} >
    {icons[props.name]}
  </IconWrapper>
);

export default Icon;
