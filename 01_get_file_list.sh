
# Requires Artifactory Pro
# curl -X GET "http://60.205.170.191:8081/artifactory/api/storage/example-repo-local?list&deep=1&listFolders=1&mdTimestamps=1" \
# -H 'X-JFrog-Art-Api: '"$ART_API_KEY_CE"'' 


curl -X GET "http://60.205.170.191:8082/artifactory/api/storage/example-repo-local" \
-H 'X-JFrog-Art-Api: '"$ART_API_KEY_CE"''
