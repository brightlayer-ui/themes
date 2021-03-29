cd dist

MASTER_VERSION=`node -p "require('./package.json').version"`
NPM_LATEST_VERSION=`npm show @pxblue/react-themes version`
NPM_BETA_VERSION=`npm show @pxblue/react-themes@beta version`
NPM_ALPHA_VERSION=`npm show @pxblue/react-themes@alpha version`

if grep -q "alpha" <<< "$MASTER_VERSION";
then
    if ! [ $MASTER_VERSION == $NPM_ALPHA_VERSION ];
    then
        echo "Publishing new alpha";
        npm publish --tag alpha
    else
        echo "Alpha version is already published."
    fi
elif grep -q "beta" <<< "$MASTER_VERSION";
then
    if ! [ $MASTER_VERSION == $NPM_BETA_VERSION ];
    then
        echo "Publishing new beta";
        npm publish --tag beta
    else
        echo "Beta version is already published."
    fi
else
    if ! [ $MASTER_VERSION == $NPM_LATEST_VERSION ];
    then
        echo "Publishing new latest";
        npm publish
    else
        echo "Latest version is already published."
    fi
fi