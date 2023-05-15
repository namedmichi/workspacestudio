tslines=$(git ls-files | grep -E '\.ts |\.ts$'  |  wc -l)
tsrightline=$(($tslines-3))
jslines=$(git ls-files | grep -E '\.js |\.js$'  |  wc -l)
jsrightline=$(($jslines-3))

htmlChars=$(git ls-files | grep -E '\.html |\.html$'  | xargs wc -c | tail -1 | sed 's/$/ Chars \n/') 
cssChars=$(git ls-files | grep -E '\.css |\.css$'  | xargs wc -c | tail -1 | sed 's/$/ Chars \n/') 
jsChars=$(git ls-files | grep -E '\.js |\.js$' | tail -$jsrightline | xargs wc -c |tail -1 | sed 's/$/ Chars \n/') 
tsChars=$(git ls-files | grep -E '\.ts |\.ts$' | tail -$tsrightline  | xargs wc -c | tail -1 | sed 's/$/ Chars \n/') 
htmlWords=$(git ls-files | grep -E '\.html |\.html$'  | xargs wc -w | tail -1 | sed 's/$/ Words \n/') 
cssWords=$(git ls-files | grep -E '\.css |\.css$'  | xargs wc -w | tail -1 | sed 's/$/ Words \n/') 
jsWords=$(git ls-files | grep -E '\.js |\.js$' | tail -$jsrightline | xargs wc -w |tail -1 | sed 's/$/ Words \n/') 
tsWords=$(git ls-files | grep -E '\.ts |\.ts$' | tail -$tsrightline | xargs wc -w | tail -1 | sed 's/$/ Words \n/') 
htmlLines=$(git ls-files | grep -E '\.html |\.html$'  | xargs wc -l | tail -1 | sed 's/$/ Lines html \n/') 
cssLines=$(git ls-files | grep -E '\.css |\.css$'  | xargs wc -l | tail -1 | sed 's/$/ Lines css \n/') 
jsLines=$(git ls-files | grep -E '\.js |\.js$' | tail -$jsrightline | xargs wc -l |tail -1 | sed 's/$/ Lines javascript \n/') 
tsLines=$(git ls-files | grep -E '\.ts |\.ts$' | tail -$tsrightline | xargs wc -l | tail -1 | sed 's/$/ Lines typescript \n/') 



echo $htmlChars $htmlWords $htmlLines ";"  >> CounterFile.txt;
echo $cssChars $cssWords $cssLines ";"  >> CounterFile.txt;
echo $jsChars $jsWords $jsLines ";"  >> CounterFile.txt;
echo $tsChars $tsWords $tsLines ";"  >> CounterFile.txt;
echo "Am "$(date +"%c") ";" >> CounterFile.txt;
echo "----------------;" >> CounterFile.txt;
exit 0