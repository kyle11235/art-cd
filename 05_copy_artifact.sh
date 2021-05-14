
# UI API
# -b cookie.txt \

curl 'http://60.205.170.191:8082/ui/api/v1/ui/artifactactions/copy' \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Origin: http://60.205.170.191:8082' \
  -H 'Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7' \
  -H "$ART_API_COOKIE_CE" \
  --data-raw '{"repoKey":"example-repo-local","path":"doc","targetRepoKey":"example-repo-local","targetPath":"doc7"}' \
  --compressed \
  --insecure

