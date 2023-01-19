import React, { useState, useEffect } from "react";
import { GitHubUserView } from "./GitHubUserView";

const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({login}){
  const [data, setData] = useState(loadJSON(`user:${login}`));
  const [key, setKey] = useState('');
  const [errorRequest, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    setKey(`user:${login}`);
    if(data && data.login !== login)
      setData('');
    let newData = loadJSON(`user:${login}`);
    setData(newData);
    if (newData && newData.login.toLowerCase() === login.toLowerCase())
    { 
      setLoading(false);
      return;
    }
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(error => {
        setError(error);
        setLoading(false);
        console.log(error)});
  }, [login]);

  useEffect(() => {
    if (!data || data.processed || !data.login) return;
    const { name, avatar_url, location } = data;
    saveJSON(key, {
      name,
      login,
      avatar_url,
      location,
      processed: true
    });
  }, [data]);

  if(loading)
    return <h2><i>loading...</i></h2>
  if (data && data.login && data.login.toLowerCase() === login.toLowerCase())
    return <GitHubUserView data={data}/>;
  else
    if(data && data.message)
      return <pre>{data.message}</pre>;
  return null;  
}

export default GitHubUser;