import { message } from 'antd';
import fetch from 'dva/fetch';
import getStarHistory from './components/getStarHistory';
//获取账户信息api
export const getAccountInfo = async function({ account }) {
  return await fetch(`https://api.github.com/users/${account}`)
    .then(response => response.json())
    .catch(err => message.error(err.message));
};
export const getData = async function ({ url }) {
    return await fetch(url)
        .then(response => response.json())
        .catch(err => message.error(err.message));
}
// 获取历史stars趋势图数据
export const getReposStargazers = async function (payload) {
  const { gitname } = payload;
  if (!gitname) {
      throw new Error("getReposStargazers：gitname参数为空");
  }
  return await getStarHistory(gitname)
      .catch(err => {
          console.log(err);
      });;
};