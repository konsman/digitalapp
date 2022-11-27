module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'node',
      host : '159.203.62.3',
      ref  : 'origin/main',
      repo : 'git@github.com:konsman/digitalapp.git',
      path : '/home/node',
     
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      
    }
  }
};
