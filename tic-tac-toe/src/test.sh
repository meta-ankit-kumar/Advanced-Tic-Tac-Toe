#!/bin/sh

function printFiles() {
	parent=`ls`
	for eachfile in $parent
	do
		if [ -d $eachfile ];
		then
			echo "$eachfile is a directory"
			childfolder=`ls "$eachfile"`
	   		for new in $childfolder
			do
	   			echo "$new"
			done
		else
		     echo "$eachfile"
		fi
	done
}
printFiles 