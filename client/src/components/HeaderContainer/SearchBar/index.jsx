import './search-bar.scss';
import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useClickOutside } from 'react-click-outside-hook';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { MoonLoader } from 'react-spinners';
import {
  collapseContainer,
  expandContainer,
  fetchSearchInfo,
  resetSearchValue,
  resetTvShows,
  setIsEmptyToTrue,
  setNoTvShowsToFalse,
  setSearchValue,
} from '../../../store/actions/searchbar';
import { useDebounce } from '../../../hooks/debounceHook';
import SearchBarItem from './SearchBarItem';
import SearchBarWarningMessage from './SearchBarWarningMessage';

const containerVariants = {
  expanded: {
    height: '20rem',
  },
  collapsed: {
    height: '2.5rem',
  },
};

const containerTransition = {
  type: 'string',
  damping: 22,
  stiffness: 150,
};

const SearchBar = () => {
  const isExpanded = useSelector((state) => state.searchbar.isExpanded);
  const searchValue = useSelector((state) => state.searchbar.searchValue);
  const isLoading = useSelector((state) => state.searchbar.isLoading);
  const tvShows = useSelector((state) => state.searchbar.tvShows);
  const isEmpty = useSelector((state) => state.searchbar.isEmpty);
  const noTvShows = useSelector((state) => state.searchbar.noTvShows);
  const dispatch = useDispatch();
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  let style;

  if (isLarge) {
    style = {
      width: '39rem',
    };
  }
  else if (isMobile) {
    style = {
      right: '19%',
      width: '55%',
      top: '2rem',
    };
  }
  else {
    style = {};
  }
  const expandSearchContainer = () => {
    dispatch(expandContainer());
  };

  const collapseSearchContainer = () => {
    dispatch(collapseContainer());
    dispatch(resetTvShows());
    dispatch(setNoTvShowsToFalse());
    dispatch(setIsEmptyToTrue());
    if (inputRef.current) {
      dispatch(resetSearchValue());
    }
  };

  const handleSearchInputChange = (event) => {
    if (event.target.value === '') {
      dispatch(setNoTvShowsToFalse());
      dispatch(resetTvShows());
      dispatch(setIsEmptyToTrue());
    }
    dispatch(setSearchValue(event.target.value));
  };

  useEffect(() => {
    if (isClickedOutside) collapseSearchContainer();
  }, [isClickedOutside]);

  const searchInfoToShow = () => {
    dispatch(fetchSearchInfo());
  };

  useDebounce(searchValue, 300, searchInfoToShow);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <motion.div
        className="search-bar"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        transition={containerTransition}
        ref={parentRef}
        style={style}
      >
        <div className="search-bar__input-container">
          <span className="search-bar__search-icon">
            <IoSearch />
          </span>
          <input
            className="search-bar__input"
            placeholder="recherche"
            onFocus={expandSearchContainer}
            onChange={handleSearchInputChange}
            value={searchValue}
            ref={inputRef}
          />
          <AnimatePresence>
            { isExpanded && (
            <motion.span
              className="search-bar__close-icon"
              onClick={collapseSearchContainer}
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </motion.span>
            ) }
          </AnimatePresence>
        </div>
        { isExpanded && <span className="search-bar__seperator" /> }
        { isExpanded && (
        <div className="search-bar__content">
          { isLoading && (
          <div className="search-bar__loading-wrapper">
            <MoonLoader loading color="#000000" size={40} />
          </div>
          ) }
          { !isLoading && isEmpty && !noTvShows && (
          <div className="search-bar__loading-wrapper">
            <SearchBarWarningMessage message="Start typing to search !" />
          </div>
          ) }
          { !isLoading && noTvShows && (
          <div className="search-bar__loading-wrapper">
            <SearchBarWarningMessage message="No Tv Shows or Series found !" />
          </div>
          ) }
          { !isLoading && !isEmpty && (
          <div>
            { tvShows.map(({ show }) => (
              <SearchBarItem
                key={show.id}
                thumbnailSrc={show.image && show.image.medium}
                name={show.name}
              />
            )) }
          </div>
          )}
        </div>
        ) }
      </motion.div>
    </Grid>

  );
};

export default SearchBar;
