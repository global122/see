#!/bin/bash

# Install Flutter and add it to the PATH
git clone https://github.com/flutter/flutter.git --depth 1 -b stable --single-branch /usr/local/share/flutter
export PATH="$PATH:/usr/local/share/flutter/bin"

echo "Flutter installed. Building the project..."
flutter build web --release
