#!/bin/bash

# Move into the nested directory
cd my-app

# Rename the existing node_modules directory in the parent directory to something else
mv ../node_modules ../old_node_modules

# Move all the contents of the nested directory to the parent directory
mv * ../

# Move the renamed node_modules directory back to its original name
mv ../old_node_modules ../node_modules

# Move back to the parent directory
cd ..

