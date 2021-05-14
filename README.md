# artifactory CE

- why, target?

        数据存储，数据保障，数据管理，数据分享

- install

        - download
        
                https://conan.io/downloads.html

        - install by docker
        
                vi /etc/profile
                export JFROG_HOME=/opt/jfrog
                source /etc/profile

                mkdir -p $JFROG_HOME/artifactory/var/etc/
                cd $JFROG_HOME/artifactory/var/etc/
                touch ./system.yaml
                chown -R root:root $JFROG_HOME/artifactory/var   (change to current user:group)
                chmod -R 777 $JFROG_HOME/artifactory/var

                docker run --name artifactory -v $JFROG_HOME/artifactory/var/:/var/opt/jfrog/artifactory -d -p 8081:8081 -p 8082:8082 docker.bintray.io/jfrog/artifactory-cpp-ce:latest

        - visit
        
                http://60.205.170.191:8082

- basic functions

        - folder/file CURD, download
        - copy/move (requires artifactory pro)
        - search/tag/filter (requires artifactory pro)
        - share
        
- resolve issue that requires artifactory pro

        - set session timeout
        
                vi system.yaml
        
                frontend:
                  session:
                    timeMinutes:87600

        - do not revoke session

                - copy bundle.js from container
                
                        docker cp artifactory:/opt/jfrog/artifactory/app/frontend/bin/server/dist /opt/jfrog/artifactory/app/frontend/bin/server

                - or download bundle.js from pkg
                
                        https://releases.jfrog.io/artifactory/bintray-artifactory/org/artifactory/cpp/ce/jfrog-artifactory-cpp-ce/7.18.6/

                - vi bundle.js

                        check bundle.js

                - copy bundle.js back into container

                        docker cp /opt/jfrog/artifactory/app/frontend/bin/server/dist/bundle.js artifactory:/opt/jfrog/artifactory/app/frontend/bin/server/dist

                - restart 
                
                        docker stop artifactory
                        docker start artifactory

        - copy session cookie

                chrome -> pick an ajax request -> copy as curl

                vi /etc/profile
                export ART_API_COOKIE_CE="Cookie: SPRING_SECURITY_REMEMBER_ME_COOKIE=xxx; USER_PROFILE_TOKEN=xxx; ACCESSTOKEN=xxx.xxx.xxx; REFRESHTOKEN=xxx"
                source /etc/profile

        - remove Requires artifactory pro?

                ???

        - test UI API
        
                ./05_copy_artifact.sh

- community version VS commercial version

        - https://www.jfrog.com/confluence/display/JFROG/Artifactory+Comparison+Matrix
        
                - S3, max data protect, unlimited storage quota, S3 direct download
                - HA
                - Project-based Management -> start my business
                - CDN/P2P download ? 

