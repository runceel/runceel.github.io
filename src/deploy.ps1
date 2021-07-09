Remove-Item .\public
npm install
npm run build

Set-Location .\public

git init
git add --all
git commit -m 'deploy'
git push -f https://github.com/runceel/runceel.github.io.git master:gh-pages
