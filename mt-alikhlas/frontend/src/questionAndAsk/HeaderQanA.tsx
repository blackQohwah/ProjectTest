import React, { ChangeEvent, FC, useState, FormEvent } from 'react';
import { UserIcon } from './Icons';
import { fontFamily, fontSize, gray1, gray2, gray5 } from './Styles';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useAuth } from './Auth';
import AOS from 'aos';
import { BsArrowReturnLeft } from 'react-icons/bs';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

AOS.init();

const buttonStyle = css`
   border: none;
   font-family: ${fontFamily};
   font-size: ${fontSize};
   padding: 5px 10px;
   background-color: transparent;
   color: ${gray2};
   text-decoration: none;
   cursor: pointer;
   span {
      margin-left: 10px;
   }
   :focus {
      outline-color: ${gray5};
   }
`;

export const HeaderQandA: FC<RouteComponentProps> = ({ history, location }) => {
   const searchParams = new URLSearchParams(location.search);
   const criteria = searchParams.get('criteria') || '';

   const [search, setSearch] = useState(criteria);

   const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value);
   };

   const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      history.push(`/search?criteria=${search}`);
   };

   const { isAuthenticated, user, loading } = useAuth();

   return (
      <div className="container">
         <div
            css={css`
               box-sizing: border-box;
               margin-top: 20px;
               top: 0;
               width: 100%;
               display: flex;
               align-items: center;
               justify-content: space-between;
               padding: 10px 20px;
               background-color: #b2e0b2;
               border-bottom: 1px solid ${gray5};
               box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
            `}
            data-aos="fade-up"
            data-aos-delay="500"
         >
            <Link
               to="/"
               css={css`
                  font-size: 24px;
                  font-weight: bold;
                  color: ${gray1};
                  text-decoration: none;
               `}
            >
               <BsArrowReturnLeft
                  css={css`
                     opacity: 0.7;
                  `}
               />
               Kembali
            </Link>
            <form onSubmit={handleSearchSubmit} id="searchForm">
               <input
                  type="text"
                  placeholder="Cari Pertanyaan..."
                  onChange={handleSearchInputChange}
                  value={search}
                  css={css`
                     box-sizing: border-box;
                     font-family: ${fontFamily};
                     font-size: ${fontSize};
                     padding: 8px 10px;
                     border: 1px solid ${gray5};
                     border-radius: 3px;
                     color: ${gray2};
                     background-color: white;
                     width: 150px;
                     height: 30px;
                     :focus {
                        outline-color: ${gray5};
                     }
                  `}
               />
               <button
                  type="submit"
                  form="searchForm"
                  value={search}
                  css={css`
                     box-sizing: border-box;
                     background-color: green;
                     color: white;
                     border: 1px solid black;
                     border-radius: 3px;
                     :focus {
                        outline-color: ${gray5};
                     }
                     margin-left: 3px;
                  `}
               >
                  Cari
               </button>
            </form>

            {!loading &&
               (isAuthenticated ? (
                  <div>
                     <span>{user!.name}</span>
                     <Link
                        to={{ pathname: '/signout', state: { local: true } }}
                        css={buttonStyle}
                     >
                        <UserIcon />
                        <span>Sign Out</span>
                     </Link>
                  </div>
               ) : (
                  <Link to="/signin" css={buttonStyle}>
                     <UserIcon />
                     <span>Sign In</span>
                  </Link>
               ))}
         </div>
      </div>
   );
};

export const HeaderWithRouter = withRouter(HeaderQandA);
