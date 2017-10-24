#/bin/bash

# 0 5 * * * /usr/local/nutch/reindex.sh > /dev/null 2>&1

pushd /usr/local/nutch
bin/nutch crawl url.txt -dir crawl -depth 500 -topN 500
popd

pushd /usr/local/tomcat
bin/shutdown.sh && bin/startup.sh
popd

