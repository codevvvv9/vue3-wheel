rm -rf dist &&
npm run build && 
cd dist &&
git init &&
git add . &&
git commit -m '重新部署' &&
git branch -M main &&
git remote add origin git@github.com:codevvvv9/vue3-wheel-publish.git &&
git push -u -f origin main &&
cd ..
echo http://vvushaostudy.cn/vue3-wheel-publish/