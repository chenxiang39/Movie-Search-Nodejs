const express = require('express');
const router = express.Router();
const axios = require('axios');
const commonAttr = require('../CommonAttr.json')
router.get('/currently_playing', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + commonAttr.api_key +'&language=en-US&page=1'
    axios.get(url).then(pos =>{
        result = [];
        for(let i = 0; i < Math.min(5, pos.data.results.length);i++){
            result.push(pos.data.results[i]);
        }
        res.send(result);
        
    }).catch(error =>{
        res.send(error);
    })
})
router.get('/airing_today', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=' + commonAttr.api_key +'&language=en-US&page=1'
    axios.get(url).then(pos =>{
        result = [];
        for(let i = 0; i < Math.min(5, pos.data.results.length);i++){
            result.push(pos.data.results[i]);
        }
        res.send(result);
        
    }).catch(error =>{
        res.send(error);
    })
})
router.get('/popular_movies', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + commonAttr.api_key +'&language=en-US&page=1'
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/top_rated_movies', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + commonAttr.api_key +'&language=en-US&page=1'
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/trending_movies', function(req,res){
    let url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + commonAttr.api_key;
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/popular_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/popular?api_key=' + commonAttr.api_key +'&language=en-US&page=1'
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/top_rated_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + commonAttr.api_key +'&language=en-US&page=1'
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/trending_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=' + commonAttr.api_key;
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/video_movie', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/'+req.query.id +'/videos?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})


router.get('/detail_movie', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/'+req.query.id +'?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/cast_movie', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/'+req.query.id +'/credits?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.cast);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/review_movie', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/'+req.query.id +'/reviews?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/recommended_movie', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/'+req.query.id +'/recommendations?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/similar_movie', function(req,res){
    let url = 'https://api.themoviedb.org/3/movie/'+req.query.id +'/similar?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
    }).catch(error =>{
        res.send(error);
    })
})


router.get('/video_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/'+req.query.id +'/videos?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
        
    }).catch(error =>{
        res.send(error);
    })
})


router.get('/detail_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/'+req.query.id +'?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/cast_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/'+req.query.id +'/credits?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.cast);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/review_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/'+req.query.id +'/reviews?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/recommended_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/'+req.query.id +'/recommendations?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/similar_tv', function(req,res){
    let url = 'https://api.themoviedb.org/3/tv/'+req.query.id +'/similar?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data.results);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/cast_detail', function(req,res){
    let url = 'https://api.themoviedb.org/3/person/'+req.query.id +'?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/cast_external', function(req,res){
    let url = 'https://api.themoviedb.org/3/person/'+req.query.id +'/external_ids?api_key='+commonAttr.api_key+'&language=en-US&page=1';
    axios.get(url).then(pos =>{
        res.send(pos.data);
    }).catch(error =>{
        res.send(error);
    })
})

router.get('/multi_search', function(req,res){
    let url = 'https://api.themoviedb.org/3/search/multi?api_key='+commonAttr.api_key+'&language=en-US&query='+req.query.query;
    axios.get(url).then(pos =>{
        let result = [];
        let count = 0;
        for(let i = 0; i < pos.data.results.length; i++){
            if(pos.data.results[i].media_type === "tv" || pos.data.results[i].media_type === "movie"){
                if(!!pos.data.results[i].backdrop_path && !!pos.data.results[i].poster_path){
                    result.push(pos.data.results[i]);
                    count++;
                    if(count === 7){
                        res.send(result);
                        return;
                    }
                }
            }
        }
        res.send(result);
    }).catch(error =>{
        res.send(error);
    })
})



module.exports = router;