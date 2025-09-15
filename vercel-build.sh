#!/bin/bash
# Install Flutter and build the project

git clone https://github.com/flutter/flutter.git --depth 1 -b stable --single-branch ~/flutter
export PATH="$PATH:~/flutter/bin"

echo "Flutter installed. Building the project..."
flutter build web --release
