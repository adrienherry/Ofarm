import './search-bar.scss';
import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useClickOutside } from 'react-click-outside-hook';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { MoonLoader } from 'react-spinners';
import { useLocation } from 'react-router';
import {
  collapseContainer,
  expandContainer,
  fetchSearchInfo,
  resetSearchValue,
  resetResults,
  setIsEmptyToTrue,
  setNoResultsToFalse,
  setSearchValue,
} from '../../../store/actions/searchbar';
import { useDebounce } from '../../../hooks/debounceHook';
import SearchBarItem from './SearchBarItem';
import SearchBarWarningMessage from './SearchBarWarningMessage';

const containerVariants = {
  expanded: {
    height: '21.5rem',
    width: '100%',
  },
  collapsed: {
    height: '2.5rem',
    width: '100%',
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
  const results = useSelector((state) => state.searchbar.results);
  const isEmpty = useSelector((state) => state.searchbar.isEmpty);
  const noResults = useSelector((state) => state.searchbar.noResults);
  const dispatch = useDispatch();
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const is950 = useMediaQuery('(min-width: 950px)');
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const location = useLocation();

  let style;

  if (isLarge) {
    style = {
      width: '100%',
    };
  }
  else if (!is950) {
    style = {
      width: '100%',
    };
  }
  else if (isMobile) {
    // style = {
    //   right: '19%',
    //   width: '55%',
    //   top: '2rem',
    // };
  }
  else {
    style = {};
  }
  const expandSearchContainer = () => {
    dispatch(expandContainer());
  };

  const collapseSearchContainer = () => {
    dispatch(collapseContainer());
    dispatch(resetResults());
    dispatch(setNoResultsToFalse());
    dispatch(setIsEmptyToTrue());
    if (inputRef.current) {
      dispatch(resetSearchValue());
    }
  };

  const handleSearchInputChange = (event) => {
    if (event.target.value === '') {
      dispatch(setNoResultsToFalse());
      dispatch(resetResults());
      dispatch(setIsEmptyToTrue());
    }
    dispatch(setSearchValue(event.target.value));
  };

  useEffect(() => {
    if (isClickedOutside) collapseSearchContainer();
  }, [isClickedOutside]);

  useEffect(() => {
    collapseSearchContainer();
  }, [location]);

  const searchInfoToShow = () => {
    dispatch(fetchSearchInfo());
  };

  useDebounce(searchValue, 300, searchInfoToShow);

  return (

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
          { !isLoading && isEmpty && !noResults && (
          <div className="search-bar__loading-wrapper">
            <SearchBarWarningMessage message="Écrivez le légume ou le fruit que vous voulez rechercher" />
          </div>
          ) }
          { !isLoading && noResults && (
          <div className="search-bar__loading-wrapper">
            <SearchBarWarningMessage message="Pas de résultat" />
          </div>
          ) }
          { !isLoading && !isEmpty && (
          <div>
            { results.map((item) => (
              <SearchBarItem
                key={item.id}
                {...item}
              />
            )) }
          </div>
          )}
        </div>
      ) }
    </motion.div>

  );
};

export default SearchBar;
