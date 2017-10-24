const path=require('path');
const express=require('express');
const Skeleton=require('all-round-skeleton');
const config=require('./config')


class MySkeleton extends Skeleton{
    constructor(opts){
        super(opts);
    }

    serveStaticFiles(){
        const app=this.app;
        const config=this.config;

        // app.use('/static',this.staticHandle(path.join(__dirname,)));
        super.serveStaticFiles();
    }
}

const skeleton =new Skeleton({config});
skeleton.run();