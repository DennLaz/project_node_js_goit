//
import "./index.scss";
import Result from "./modules/TestModule/Result/Result";

const App = () => {
  // const isMobile = useMediaPredicate("(max-width: 767px)");

  // const dispatch = useDispatch();

  // const { loading } = useSelector(getErrorLoadingAuth);

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      {/* <main> */}
      {/* <UserRoutes /> */}
      {/* </main> */}
      {/* <Footer /> */}
      {/* {loading && <Loader />} */}
      <Result value={3} />
    </>
  );
};

export default App;
