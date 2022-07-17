#!/bin/sh

function printFiles() {
	parent=`ls`
	for eachfile in $parent
	do
		if [ -d $eachfile ];
		then
			echo "$eachfile is a directory"
			childfolder=`ls "$eachfile"`
	   		for child in $childfolder
			do
	   			echo "$child"
			done
		else
		     echo "$eachfile"
		fi
	done
}
printFiles 