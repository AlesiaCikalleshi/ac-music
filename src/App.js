import { useEffect, useReducer } from "react";
import { initialState, playerReducer } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { setStorageValue } from "services/localStorage";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

// Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

// Import react toastify css
import "react-toastify/dist/ReactToastify.css";

// Import rc-slider css
import "rc-slider/assets/index.css";
import AppRouter from "AppRouter";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    setStorageValue("savedTrackIds", state.savedTrackIds);
  }, [state.savedTrackIds]);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <AppRouter />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
