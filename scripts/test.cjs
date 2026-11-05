const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
process.chdir(path.resolve(__dirname,'..'));
let failed=0;for(const f of fs.readdirSync('tests').filter(f=>f.endsWith('.cjs')).sort()){console.log('\n'+f);const r=spawnSync(process.execPath,['tests/'+f],{stdio:'inherit'});if(r.status!==0)failed++;}process.exitCode=failed?1:0;
