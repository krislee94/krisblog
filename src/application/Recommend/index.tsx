import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "../../components/slider";
import RecommendList from "../../components/list/index";
import * as actionTypes from "./store/actionCreators";
import {
  // renderRoutes,
  RouteConfig,
} from "react-router-config";

interface RecommendProps extends RouteConfig {
  bannerList: [];
  recommendList: [];
  enterLoading: boolean;
  getBannerDataDispatch: () => void;
  getRecommendListDataDispatch: () => void;
}
const Recommend: React.FC<RecommendProps> = ({
  bannerList,
  recommendList,
  enterLoading,
  getBannerDataDispatch,
  getRecommendListDataDispatch,
}) => {
  getBannerDataDispatch();
  useEffect(() => {
    console.log("---bannerList---", bannerList);
    //获取banner图
    if (!bannerList.length) {
      getBannerDataDispatch();
    }
    getBannerDataDispatch();
    //获取歌手推荐列表
    if (!recommendList.length) {
      getRecommendListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
      <RecommendList recommendList={recommendList}></RecommendList>
    </div>
  );
};

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
  bannerList: state.bannerList,
  recommendList: state.recommendList,
  // songsCount: state.recommend.recommendList,
  enterLoading: state.enterLoading,
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch: any) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
