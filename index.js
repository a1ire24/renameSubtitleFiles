const fs = require('fs');
const path = require('path');

fs.readdir(process.cwd(), function(err,list){
    if(err) throw err;

    const subtitleFiles = list.filter(item => path.extname(item) === '.srt');
    const movieFiles = list.filter(item => path.extname(item) === '.mkv');

    for (let i = 0; i < subtitleFiles.length; i++) {
        
        const episode = i < 9 ? 'e0'+(i+1).toString() : 'e'+(i+1).toString();
        const Episode = i < 9 ? 'E0'+(i+1).toString() : 'E'+(i+1).toString();

        movieFiles.map(item => {        
            if(item.includes(episode)){
                fs.copyFile(subtitleFiles[i], item.replace('.mkv','.srt'), (err) => {
                    if (err) throw err;
                });
            }
            if(item.includes(Episode)){
                fs.copyFile(subtitleFiles[i], item.split('.mkv')[0]+'.srt', (err) => {
                    if (err) throw err;
                });
            }
            console.log('subtitle is renamed');
        })        
    }
});

